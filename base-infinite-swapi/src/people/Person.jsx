export function Person({ name, hairColor, eyeColor, height, skinColor, gender }) {
  return (
    <li>
      {name}
      <ul>
        <li>머리카락 색: {hairColor}</li>
        <li>눈 색: {eyeColor}</li>
        <li>키: {height}</li>
        <li>피부 색: {skinColor}</li>
        <li>성별: {gender}</li>
      </ul>
    </li>
  );
}
