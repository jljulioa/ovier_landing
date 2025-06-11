
export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Ovier H. Avila López. Todos los derechos reservados.</p>
        <p className="text-sm mt-1">Tu gestor de confianza para Nueva EPS y más.</p>
      </div>
    </footer>
  );
}
