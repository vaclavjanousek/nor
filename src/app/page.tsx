export default function Home() {
  const sha = process.env.NEXT_PUBLIC_COMMIT_SHA ?? "dev";
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", margin: 0 }}>Nor</h1>
      <p style={{ color: "#555", margin: 0 }}>Mission: TBD — see NOR-1.</p>
      <code
        style={{
          fontSize: "0.85rem",
          color: "#888",
          background: "#f4f4f5",
          padding: "0.25rem 0.5rem",
          borderRadius: "4px",
        }}
      >
        commit: {sha.slice(0, 7)}
      </code>
    </main>
  );
}
