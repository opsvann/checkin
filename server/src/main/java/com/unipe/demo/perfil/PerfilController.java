package com.unipe.demo.perfil;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import javax.validation.*;
import java.net.*;
import java.util.*;

@RestController
public class PerfilController {
    private PerfilRepository repository;

    public PerfilController(PerfilRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/perfis")
    public Collection<Perfil> perfis() {
        return repository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/perfil/{id}")
    ResponseEntity<?> getPerfil(@PathVariable Long id) {
        Optional<Perfil> perfil = repository.findById(id);
        return perfil.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/perfil/user/{uid}")
    ResponseEntity<?> getPerfil(@PathVariable String uid) {
        Perfil perfil = repository.findByUid(uid);
        return ResponseEntity.ok().body(perfil);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/perfil")
    ResponseEntity<Perfil> createPerfil(@Valid @RequestBody Perfil perfil) throws URISyntaxException {
        Perfil result = repository.save(perfil);
        return ResponseEntity.created(new URI("/perfil/" + result.getId()))
                .body(result);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/perfil")
    ResponseEntity<Perfil> updatePerfil(@Valid @RequestBody Perfil perfil) {
        Perfil result = repository.save(perfil);
        return ResponseEntity.ok().body(result);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/perfil/{id}")
    public ResponseEntity<?> deletePerfil(@PathVariable Long id) {
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
