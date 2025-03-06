#language:es

Característica: Compra y eliminación de un producto en OpenCart

  @gestionCarrito
  Escenario: Agregar y eliminar un producto del carrito de compras
    Cuando que el usuario agrega los siguientes productos al carrito:
      | producto                 |
      | iPhone                   |
      | Samsung SyncMaster 941BW |
      | MacBook                  |
    Entonces los productos deben estar en el carrito de compras
    Cuando el usuario elimina los siguientes productos del carrito:
      | producto                 |
      | iPhone                   |
      | Samsung SyncMaster 941BW |
      | MacBook                  |
    Entonces los productos eliminados no deben estar en el carrito de compras
