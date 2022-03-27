import QuestaoModel from "../../model/questao";
import RespostasModel from "../../model/respostas";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual Bicho transmite a Doença de Chagas?', [
        
        RespostasModel.errada('Abelha'), //método estático aacessado
        RespostasModel.errada('Barata'),
        RespostasModel.errada('Pulga'),
        RespostasModel.certa('Barbeiro'),

    ]),
    new QuestaoModel(202, 'Qual Fruto é conhecido no norte e nordeste como Jerimum?', [
        
        RespostasModel.errada('Caju'),
        RespostasModel.errada('Côco'),
        RespostasModel.errada('Chuchu'),
        RespostasModel.certa('Abóbora'),

    ])
]

export default questoes