package com.unipe.demo.evento;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class EventoCommandLineRunner implements CommandLineRunner {

    private final EventoRepository repository;

    public EventoCommandLineRunner(EventoRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        repository.save(new Evento("Exposição no shopping", "Às 16:00hrs da tarde na praça de alimentação"));
        repository.findAll().forEach(System.out::println);
    }
}
