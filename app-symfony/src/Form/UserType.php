<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('username', TextType::class, [
            'label' => 'Login', 
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control'],])
        ->add('firstName', TextType::class, [
            'label' => 'Name', 
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control'],])
        ->add('secondName', TextType::class, [
            'label' => 'SecondName', 
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control'],])
        ->add('password', TextType::class, [
            'label' => 'Password', 
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control'],]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
