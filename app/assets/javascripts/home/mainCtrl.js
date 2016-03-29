angular.module('flapperNews')
    .controller('MainCtrl', [
        '$scope', 'posts',
        function ($scope, posts) {
            $scope.test = 'Hello world!';

            $scope.posts = posts.posts;

            $scope.addPost = function () {
                if (!$scope.title || $scope.title === '') {
                    return;
                }
                //$scope.posts.push({
                //    title: $scope.title,
                //    link: $scope.link,
                //    upvotes: 0,
                //    comments: [
                //        {author: 'Joe', body: 'Cool post!', upvotes: 0},
                //        {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
                //    ]
                //});

                posts.create({
                    title: $scope.title,
                    link: $scope.link,
                });

                $scope.title = '';
                $scope.link = '';
            };

            $scope.incrementUpvotes = function (post) {
                //post.upvotes += 1;
                posts.upvote(post);
            };
        }
    ])
