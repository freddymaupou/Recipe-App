import "../global.css"

export default function AddRecipeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
          {children}
      </section>
    );
  }
  