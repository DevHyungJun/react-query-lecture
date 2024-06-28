import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Person } from "./Person";


const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError, error } = useInfiniteQuery({
    queryKey: ["sw-people"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (currentPage) => {
      return currentPage.next;
    }
  });

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.toString()}</div>
  }

  return (
    <>
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll loadMore={() => {
        if (!isFetching) fetchNextPage();
      }}
        hasMore={hasNextPage}
      >
        {data.pages.map(pageData => 
          pageData.results.map(person => 
            <Person key={person.name} name={person.name} hairColor={person.hair_color} eyeColor={person.eye_color} height={person.height} skinColor={person.skin_color} gender={person.gender} 
            initialLoad={false} />
          )
        )}
      </InfiniteScroll>
    </>
  )
};
