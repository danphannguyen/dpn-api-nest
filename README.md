1) [Controller](https://docs.nestjs.com/controllers) 
   
   Les controllers permettent la logique qui incombe à une route avec les différents types de requêtes : POST / GET / UPDATE 

    - Permet de gérer les paramètres
    - La logique
    - Ce que l'API va renvoyer
    - Faire appel a des services/providers

2) [Providers](https://docs.nestjs.com/providers)

    Encapsule une logique réutilisable dans toute l'application exemple un providers "Cats" permettrait :
      - Création
      - Modification
      - Suppression
      - Lecture
    de chats

3) [Modules](https://docs.nestjs.com/modules)

  Les modules permettent de regrouper un ensemble de logique en un "module" pour faciliter leurs imports

  === Exemple j'ai :
    - Un service ( cats )
    - Un controller ( cats )
  
  Au lieu de les importer chacun un par un, on peut les regrouper dans un "module" et importer uniquement le module

4) [Middleware](https://docs.nestjs.com/middleware)

  Les Middlewares permettent d'executer du code avant le code du controller. 
  
  === Exemple : 
  = logger.middleware.ts :
  import { Injectable, NestMiddleware } from '@nestjs/common';
  import { Request, Response, NextFunction } from 'express';

  @Injectable()
  export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
      console.log('Request...');
      next();
    }
  }

  = export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('cats');
    }
  }

  Va afficher un Request... dans le terminal pour toute les requètes 


  Ce qui permettent aussi de spécifier des règles dans les url.
  === Exemple les "Route wildcards" : 
  @Get('ab*cd')
    find() {
        return 'This route uses a wildcard';
    }

  if we go to : http://localhost:3000/cats/abdcd
  it will return : This route uses a wildcard


  On peut tout de même exclure certaine route pour ne pas appeler le code du middleware
  === Exemple d'exclusion de route : 
  consumer
  .apply(LoggerMiddleware)
  .exclude(
    { path: 'cats', method: RequestMethod.GET },
    { path: 'cats', method: RequestMethod.POST },
    'cats/(.*)',
  )
  .forRoutes(CatsController);

  ici les routes spécifié sont exclus du middleware et donc ne s'applique pas 

5) [Exeception filters](https://docs.nestjs.com/exception-filters) 
  Les "Exeception filters" est un layer implémenté de base dans Nest pour gérer les erreurs, typiquement lorsqu'une erreur n'est pas gérer par notre code, c'est lui qui s'en charge

  === Exemple de built-in exceptions
  throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })

  === Custom Exception filter
  @Post()
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
      throw new ForbiddenException();
  }

  A noter que le @UseFilters() peut se mettre au dessus du export class CatsController {} pour être appliquer a tout le scope( à toute la root) ou encore sur toute l'application avec : app.useGlobalFilters(new HttpExceptionFilter()). On peut aussi le spécifier dans un module spécifique.



6) Pipes


7) Guard
8) Interceptors
9)  Custom Decorators