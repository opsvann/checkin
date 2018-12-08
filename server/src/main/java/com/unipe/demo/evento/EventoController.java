package com.unipe.demo.evento;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import javax.validation.*;
import java.net.*;
import java.util.*;

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

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/evento/{id}")
    ResponseEntity<?> getEvento(@PathVariable Long id) {
        Optional<Evento> evento = repository.findById(id);
        return evento.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/evento")
    ResponseEntity<Evento> createEvento(@Valid @RequestBody Evento evento) throws URISyntaxException {
        Evento result = repository.save(evento);
        return ResponseEntity.created(new URI("/evento/" + result.getId()))
                .body(result);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/evento")
    ResponseEntity<Evento> updateEvento(@Valid @RequestBody Evento evento) {
        Evento result = repository.save(evento);
        return ResponseEntity.ok().body(result);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/evento/{id}")
    public ResponseEntity<?> deleteEvento(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
