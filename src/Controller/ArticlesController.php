<?php

namespace App\Controller;

use App\Repository\ArticlesRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/articles', name: 'app_articles')]
class ArticlesController extends AbstractController
{
    private $entityManager;
    private $artclesRepository;
    public function __construct(EntityManagerInterface $entityManager, ArticlesRepository $articlesRepository)
    {
        $this->entityManager = $entityManager;
        $this->artclesRepository = $articlesRepository;
    }
    #[Route('/read', name: 'app_articles')]
    public function index(): Response
    {
        $articles = $this->artclesRepository->findAll();
        $arrayOfArticles = [];

        foreach ($articles as $article){

            $arrayOfArticles[] = $article->toArray();

        }

        return $this->json($arrayOfArticles);
    }
}
