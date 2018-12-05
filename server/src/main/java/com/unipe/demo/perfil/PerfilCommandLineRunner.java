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
        Stream.of("Vanessa").forEach(nome ->
                repository.save(new Perfil(nome, "ADMIN"))
        );
        repository.findAll().forEach(System.out::println);
    }
}
