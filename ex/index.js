const produto = {
  nome: 'Caneta BIC azul',
  preco: 1.99,
  desconto: 0.05
}

function clone(objeto) {
  return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'BIC preta'
console.log(novoProduto)

import 'react'

export default props => <h1>asdasdasd</h1>
