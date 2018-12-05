package com.unipe.demo.evento;

import javax.persistence.*;
import java.util.*;
import com.unipe.demo.perfil.*;

@Entity
public class Evento {

    @Id
    @GeneratedValue
    private Long id;

    private String nome;

    @OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
    private Set<Perfil> perfis;

    public Evento() {}

    public Evento(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Set getPerfis() {
      return perfis;
    }

    public void setPerfis(Set perfis) {
      this.perfis = perfis;
    }

    @Override
    public String toString() {
        return "Evento{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                '}';
    }
}
