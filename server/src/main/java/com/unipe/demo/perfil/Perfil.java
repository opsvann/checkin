package com.unipe.demo.perfil;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Perfil {

    @Id
    @GeneratedValue
    private Long id;

    private String nome;

    private String email;

    private String grupo;

    private String uid;

    public Perfil() {}

    public Perfil(String nome, String email, String grupo, String uid) {
        this.nome = nome;
        this.email = email;
        this.grupo = grupo;
        this.uid = uid;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGrupo() {
        return grupo;
    }

    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    @Override
    public String toString() {
        return "Perfil{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                ", grupo='" + grupo + '\'' +
                ", uid='" + uid + '\'' +
                '}';
    }
}
