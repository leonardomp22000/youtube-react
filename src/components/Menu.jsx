// List rendering
// Poner llaves para meter codigo Javascript
// {hola.toUperCase()}
// key={`menu-item-${item.text}`} Es un identificador para la renderizacion de listas 
// para que react lo reconozca
// FIlter, map, reduce => metodos de arreglo       .filter((item) => item.text.startsWith('S'))

export default function Menu() {
  const menuItems = [
    { icon: "🏡", text: "Home" },
    { icon: "🩳", text: "Shorts" },
    { icon: "⏰", text: "Subscriptions" },
  ];
  return (
    <aside id="menu">
      {/*  <div className="menu-item">
                <span>🏡</span>
                Home
                </div>
            <div className="menu-item">
                <span>🩳</span>
                Shorts
                </div>
            <div className="menu-item">
                <span>⏰</span>
                Subscripctions
                </div>
        */}

      {menuItems
      .map((item) => {
        return (
          <div key={`menu-item-${item.text}`} className="menu-item">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </aside>
  );
}
