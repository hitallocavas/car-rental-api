# Api para Aluguel de Carros
O objetivo principal é fazer com que usuários selecionem os carros e os aluguem

# Configuração do Projeto
Baixe este projeto na sua máquina e execute
- npm install
- adonis serve --dev

# Rotas

| /api/user     | POST     | UserController.register |            | /api/user         |        

| /api/login    | POST     | UserController.auth     |            | /api/login        |        

| /api/cars     | HEAD,GET | CarController.index     | auth       | /api/cars.index   |        

| /api/cars     | POST     | CarController.store     | auth       | /api/cars.store   |       

| /api/cars/:id | HEAD,GET | CarController.show      | auth       | /api/cars.show    |       

| /api/cars/:id | DELETE   | CarController.destroy   | auth       | /api/cars.destroy |       


# Autores
- Hitallo Cavalcanti @hitallocavas
- Moizes Gabriel @poesiabinaria
