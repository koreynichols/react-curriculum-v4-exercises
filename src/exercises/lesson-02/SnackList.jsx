export default function SnackList() {
  const snacks = [
    { rank: 5, name: 'Broccoli' },
    { rank: 4, name: 'Apples' },
    { rank: 3, name: 'Nuts' },
    { rank: 2, name: 'Jerkey' },
    { rank: 1, name: 'Chips' },
  ];

  const sortedByRank = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <>
      <ol>
        {sortedByRank.map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
      </ol>
    </>
  );
}
