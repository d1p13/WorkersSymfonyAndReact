<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('username', TextType::class, [
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control', 'placeholder' => 'Enter a Login'],
            'constraints' => [
                    new NotBlank([
                    'message' => 'Please enter a name',

                ])
            ],
        ])
        ->add('firstname', TextType::class, [
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control', 'placeholder' => 'Enter a Name'],
            'constraints' => [
                    new NotBlank([
                    'message' => 'Please enter a name',
                ])
            ],
        ])
        ->add('secondname', TextType::class, [
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control', 'placeholder' => 'Enter a Surname'],
            'constraints' => [
                    new NotBlank([
                    'message' => 'Please enter a secondname',
                ])
            ],
        ])
        ->add('plainPassword', PasswordType::class, [
            'label_attr' => ['class' => 'form-label'], 
            'attr' => ['class' => 'form-control', 'autocomplete' => 'new-password', 'placeholder' => 'Enter a Password'],
            'mapped' => false,
            'constraints' => [
                new NotBlank([
                    'message' => 'Please enter a password',
                ])
            ],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
