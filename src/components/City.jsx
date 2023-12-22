import { useParams, useSearchParams } from "react-router-dom";

export default function City() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = useSearchParams.get("lat");
  const lng = useSearchParams.get("lng");

  console.log(id);
  return (
    <div>
      City {id}{" "}
      <p>
        Position: {searchParams} {lat} {lng}
      </p>
      <button onClick={() => setSearchParams({ lat: 23, lng: 50 })}>
        Change Position
      </button>
    </div>
  );
}
