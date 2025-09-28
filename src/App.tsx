import { InlineOverflowList } from "./components/InlineOverflowList";

function App() {
  return (
    <>
      <div className="py-7">
        <InlineOverflowList
          items={[
            {
              id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
              firstName: "Aarav",
              lastName: "Sharma",
            },
            {
              id: "c4a760a8-dbcf-4b07-bb15-16c6c5b6d12e",
              firstName: "Vivaan",
              lastName: "Patel",
            },
            {
              id: "1d4bce9a-25c6-45ab-9c47-3bfa3b1126ab",
              firstName: "Ishaan",
              lastName: "Verma",
            },
            {
              id: "5e6f8f6e-7a2c-41b8-b8de-5c2b52e16b95",
              firstName: "Vihaan",
              lastName: "Reddy",
            },
            {
              id: "7c1a87d4-622b-49ee-b2a1-0f8ddc6a1452",
              firstName: "Aditya",
              lastName: "Nair",
            },
            {
              id: "b3c1e0b6-dc56-421e-82f4-986e35c3c7dd",
              firstName: "Kabir",
              lastName: "Mishra",
            },
            {
              id: "d2f01b1f-0a1a-4b2e-8a4d-df31aef1c76a",
              firstName: "Arjun",
              lastName: "Mehta",
            },
            {
              id: "e7c9a0f2-4b44-4c15-88c4-2c14e7d67b6a",
              firstName: "Rohan",
              lastName: "Chopra",
            },
            {
              id: "6f82baba-8e8e-4a61-9a5f-ef03e6b09d19",
              firstName: "Saanvi",
              lastName: "Kapoor",
            },
            {
              id: "8d87f0f7-2783-4dcb-bb19-9e7341b7a32c",
              firstName: "Ananya",
              lastName: "Gupta",
            },
            {
              id: "9a0df51f-ef2a-45c4-b2a8-d2b9c66f5eac",
              firstName: "Diya",
              lastName: "Agarwal",
            },
            {
              id: "2f47e2a6-56d4-4958-9f7a-1a289fb1b5b7",
              firstName: "Aadhya",
              lastName: "Iyer",
            },
            {
              id: "3a9cf80f-17e1-4e7f-bc26-891674a9b3fc",
              firstName: "Pari",
              lastName: "Joshi",
            },
            {
              id: "4b1c13a7-f5c6-4a6f-a29f-b8c9c6edb0e1",
              firstName: "Myra",
              lastName: "Das",
            },
            {
              id: "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",
              firstName: "Meera",
              lastName: "Singh",
            },
          ]}
          maxItems={4}
          itemRenderer={(item: any) => (
            <div
              className="py-2 px-4 rounded-full bg-white text-black"
              key={item.id}
            >
              {item.firstName} {item.lastName}
            </div>
          )}
          buffer={105}
          showMoreRenderer={({
            onToggleShow,
            showingAll,
            count,
          }) => (
            <button
              onClick={onToggleShow}
              className="py-2 px-4 rounded-full bg-secondary text-white cursor-pointer"
            >
              {showingAll ? "Hide" : `+${count} more`}
            </button>
          )}
        >
          <button
            className="py-2 px-4 rounded-full bg-main text-white cursor-pointer"
            type="button"
          >
            Add Users
          </button>
        </InlineOverflowList>
      </div>
    </>
  );
}

export default App;
