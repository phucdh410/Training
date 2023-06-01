export default function Home() {
  return (
    <main>
      {Array(1000)
        .fill('')
        .map((e, i) => (
          <div key={i}>Trang home</div>
        ))}
    </main>
  );
}
