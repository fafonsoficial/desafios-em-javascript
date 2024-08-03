let produtoSuperMercado = [' Feijão', ' Arroz', ' Frango', ' Maçã']

produtoSuperMercado.unshift(' Beterraba')
produtoSuperMercado[5] = ' Iogurte'
produtoSuperMercado[0] = ' Cogumelos'
produtoSuperMercado.shift( ' Beterraba')
produtoSuperMercado.sort()
console.log(`O produtor que temos disponível em estoque são ${produtoSuperMercado}`)
