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
        repository.save(new Perfil("Vanessa [usuario administrador]", "vanessa@email.com", "ADMIN", "77uIDt1txReE8IJqhLejZEianIQ2"));
        repository.save(new Perfil("Lucas [usuario comum]", "lucas@email.com", "", "sNWj4ntcpjfNtioelvZm8IqQMZ63"));
        repository.findAll().forEach(System.out::println);
    }
}
