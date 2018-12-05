package com.unipe.demo.perfil;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class PerfilCommandLineRunner implements CommandLineRunner {

    private final PerfilRepository repository;

    public PerfilCommandLineRunner(PerfilRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        repository.save(new Perfil("Vanessa", "vanessa@email.com", "ADMIN", "77uIDt1txReE8IJqhLejZEianIQ2"));
        repository.findAll().forEach(System.out::println);
    }
}
