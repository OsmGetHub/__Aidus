<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PublishArticleController extends AbstractController
{
    #[Route('/publish', name: 'app_publish_article')]
    public function index(): Response
    {
        return $this->render('publish_article/index.html.twig', [
            'controller_name' => 'PublishArticleController',
        ]);
    }
}
