<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexWorkersController extends AbstractController
{
    #[Route('/', name: 'app_index_workers')]
    public function index(): Response
    {
        return $this->render('index_workers/index.html.twig', [
            'controller_name' => 'IndexWorkersController',
        ]);
    }
}
