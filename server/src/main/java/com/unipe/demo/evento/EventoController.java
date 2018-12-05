package com.unipe.demo.evento;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class EventoController {
    private EventoRepository repository;

    public EventoController(EventoRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/eventos")
    public Collection<Evento> eventos() {
        return repository.findAll();
    }

}
