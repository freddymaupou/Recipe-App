export default function RecipesListLayout({
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
  