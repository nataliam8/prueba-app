
//Objeto que contiene todos los tipos de las acciones
export const types = {

    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',
    uiActiveByCategoria: '[ui] Active by categoria',
    uiDesactiveByCategoria: '[ui] Desactive by categoria',

    authCheckingFinish: '[auth] Finish ckeckin login state',
    authStartLogin: '[auth] Start login',
    authLogin: '[auth] Login',
    authStartRegister: '[auth] Start register',
    authStartTokenRenew: '[auth] Start token renew',
    authLogout: '[auth] Logout',

    categoriaStartAddNew: '[categoria] Start add new',
    categoriaAddNew: '[categoria] Add new',
    categoriaSetActive: '[categoria] Set active',
    categoriaClearActive: '[categoria] Clear active categoria',
    categoriaUpdated: '[categoria] Categoria updated',
    categoriaDeleted: '[categoria] Categoria deleted',
    categoriaLoaded: '[categoria] Categoria loaded',

    productoStartAddNew: '[producto] Start add new',
    productoAddNew: '[producto] Add new',
    productoSetActive: '[producto] Set active',
    productoClearActive: '[producto] Clear active producto',
    productoUpdated: '[producto] Producto updated',
    productoDeleted: '[producto] Producto deleted',
    productoLoaded: '[producto] Producto loaded',
}