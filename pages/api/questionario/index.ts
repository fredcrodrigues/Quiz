import questoes from "../bancodequestoes"
import {embaralhar} from "../../../functions/arrays"
export default function Index (req, resp) {
    const ids = questoes.map(questao => questao.id)
    resp.status(202).json(embaralhar(ids))
}