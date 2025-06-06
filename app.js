angular.module('blog', []);

angular.module('blog').controller('Rest', function ($scope, $http) {
  // Carregar lista de postagens
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .then(function(response) {
      $scope.publicacoes = response.data;
    })
    .catch(function(error) {
      console.error("Erro ao carregar postagens:", error);
    });

  // Função para abrir postagem
  $scope.abrirPostagem = function(id) {
    $http.get('https://api-fake-blog.onrender.com/postagem/' + id)
      .then(function(response) {
        $scope.postagemSelecionada = response.data;
      })
      .catch(function(error) {
        console.error("Erro ao carregar postagem:", error);
      });
  };

  // Função para voltar
  $scope.voltar = function() {
    $scope.postagemSelecionada = null;
  };
});