<?php

class kernel{
    protected $routeMiddleware = [
        // Outros middlewares
        'jwt.auth' => \Tymon\JWTAuth\Http\Middleware\Authenticate::class,
    ];
}