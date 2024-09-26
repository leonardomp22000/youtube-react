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
    <aside className="col-start-1 col-end-2 row-start-2 row-end-3 pl-4">
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
          <div key={`menu-item-${item.text}`} className="p-4 rounded-[20px] flex flex-row gap items-center hover:bg-[#282828]">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </aside>
  );
}
