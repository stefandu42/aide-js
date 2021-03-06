var escape = require("escape-html");
const db = require('../db');

class Questions {
    constructor() {
    }

    /**
     * Get all questions or from a specific quizz
     * @param {number} id_quizz of the quizz we need its questions
     * @returns {Array} Array of resources
     */
    async getAll(id_quizz) {
        if(id_quizz==undefined){
            const { rows } = await db.query('SELECT * FROM questions');
            if(!rows) return false;
            return rows;
        }
        else{
            const { rows } = await db.query('SELECT * FROM questions WHERE id_quizz=$1',[id_quizz]);
            return rows;
        }
        
    }

    /**
     * Get the question identified by id
     * @param {number} id - id of the resource to find
     * @returns {object} the resource found or undefined if the id does not exist
     */
    async getOne(id) {
        const { rows } = await db.query('SELECT * FROM questions WHERE id_question = $1', [id]);
        if(!rows) return false;
        return rows[0];
    }

    /**
     * Add a resource in the DB and returns the added resource
     * @param {object} body - it contains all required data to create a ressource
     * @returns {object} the resource that was created
     */
    async addOne(body) {
       const req = 'INSERT INTO questions (id_quizz, question) VALUES ($1, $2) RETURNING id_question as id;';
       const data = [body.id_quizz, escape(body.question)];
       let { rows } =   await db.query(req,data);
       const newQuestion={
           id_question: rows[0].id,
           id_quizz: body.id_quizz,
           question: body.question,
       };
       return newQuestion;
    }

    /**
     * Delete a resource (question) in the DB and return the deleted resource
     * @param {number} id_question - id of the resource to be deleted
     * @returns {object} the resource that was deleted or undefined if the delete operation failed
     */
    async deleteOne(id_question) {
        let question = await this.getOne(id_question);
        if(!question) return false;
        let req = 'DELETE FROM questions WHERE id_question=$1;';
        let data = [id_question];
        await db.query(req,data);
        return question;
    }

    /**
     * Delete all resources (questions) in the DB where id quizz of questions is equal to id in paramter
     * @param {number} id_quizz - id of the quizz we want questions to be deleted
     * @returns {boolean} always true. We do no need to know if the id_quizz exists because the deletion will be done in any case
     */
     async deleteAll(id_quizz) {
        let req = 'DELETE FROM questions WHERE id_quizz=$1;';
        let data = [id_quizz];
        await db.query(req,data);
        return true;
    }Z

}
module.exports = { Questions };