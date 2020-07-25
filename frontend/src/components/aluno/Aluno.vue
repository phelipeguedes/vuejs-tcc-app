<template>
    <div class="aluno-page">
        <PageTitle icon="fa fa-users" main=" Alunos" subTitle="Cadastro de alunos"></PageTitle>

        <div class="alunos-page-tab">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Alunos" active>
                        
                        <b-form>
                            <input type="hidden" v-model="aluno.id" id="aluno_id">
                
                            <b-row>
                                <b-col md="6" sm="12">
                                    <b-form-group label="Nome" label-for="aluno_name">
                                        <b-form-input :readonly="mode === 'remove'" id="aluno_name" type="text" v-model="aluno.nome" placeholder="Nome do aluno(a)" required />                    
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" sm="12">
                                    <b-form-group label="Matrícula" label-for="matricula">
                                        <b-form-input :readonly="mode === 'remove'" id="matricula" type="number" v-model="aluno.matricula" placeholder="Matrícula do aluno(a)" required />
                                    </b-form-group>
                                </b-col>                           
                            </b-row>

                            <b-row>
                                <b-col md="6" sm="12">
                                    <b-form-group label="Curso" label-for="curso">
                                        <b-form-input :readonly="mode === 'remove'" id="text" type="text" v-model="aluno.curso" placeholder="Curso do aluno(a)" required />
                                    </b-form-group>
                                </b-col>

                                <b-col md="6" sm="12">
                                    <b-form-group label="Email" label-for="email">
                                        <b-form-input :readonly="mode === 'remove'" id="email" type="email" v-model="aluno.email" placeholder="Email do aluno(a)" required />                    
                                    </b-form-group>
                                </b-col> 
                            </b-row>

                            <b-row>
                                <b-button variant="primary" class="ml-3 mb-4" v-if="mode === 'save'" @click="save()">Salvar</b-button>
                                <b-button variant="danger" class="ml-3 mb-4" v-if="mode === 'remove'" @click="remove()">Excluir</b-button>
                                <b-button class="ml-3 mb-4" @click="reset()">Cancelar</b-button>
                            </b-row>

                            <b-table striped hover :items="alunos" :fields="fields">
                                <template v-slot:cell(actions)="data">
                                    
                                    <b-button class="mr-2" variant="warning" @click="readById(data.item)">
                                        <i class="fa fa-pencil"></i> 
                                    </b-button>
                                    
                                    <b-button class="mr-2" variant="danger" @click="readById(data.item, 'remove')">
                                        <i class="fa fa-trash"></i>
                                    </b-button>

                                </template>
                            </b-table>

                        </b-form>

                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
        
    </div>
</template>

<script>

import PageTitle from "../templates/PageTitle"
import { apiBaseURL, onError } from "@/global"; // url da api de alunos e função de erro
import axios from 'axios';

export default {
    name: 'aluno',
    components: { PageTitle },
    
    data: function() {
        return {
            mode: 'save',
            aluno: {},
            alunos: [],
            fields: [
                {key: 'id', label: 'Cód', sortable: true},
                {key: 'nome', label: 'Nome', sortable: true},
                {key: 'matricula', label: 'Matrícula'},
                {key: 'curso', label: 'Curso'},
                {key: 'email', label: 'Email'},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },

    methods: {

        // lista todos os alunos
        readAll() {  
            const url = `${apiBaseURL}/alunos`;

            axios.get(url)
                .then(res => {
                    this.alunos = res.data
            });
        },

        // cria ou atualiza um aluno
        save() {
            const url = `${apiBaseURL}`; 
            const method = this.aluno.id ? 'put' : 'post' // se o id não for passado, trata-se de um insert (post), senão é um update (put)
            const id = this.aluno.id ? `/${this.aluno.id}` : ''
            
            axios[method](`${url}/alunos/${id}`, this.aluno)
                .then(() => {
                    this.$toasted.global.onSuccess();
                    this.reset();
                }).catch(onError)
        },

        // carrega um único aluno
        readById(aluno, mode='save') {
            this.mode = mode;
            // copiando os valores de this.aluno p/ aluno
            this.aluno = { ...aluno };
        },

        // exclui um aluno
        remove() {
            const url = `${apiBaseURL}`;
            const id = this.aluno.id;
            
            axios.delete(`${url}/alunos/${id}`)
                .then(() => {
                    this.$toasted.global.onRemove();
                    this.reset();
                }).catch(onError);
        },

        // reinicia os valores dos campos e o objeto aluno
        reset() {
            this.mode = 'save';
            this.aluno = {};
            this.readAll();
        },

    },

    // ao carregar a página, chama a função que contém a lista de alunos
    mounted() {
        this.readAll();
    },
}
</script>

<style>
    
</style>