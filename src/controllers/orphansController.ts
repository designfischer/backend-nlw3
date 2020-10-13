import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Orphan from '../models/Orphan'

async function createOrphan(req: Request, res: Response) { 
    const orphanRepository = getRepository(Orphan)
    
    const bodyData = req.body

    try {
        const newOrphan = orphanRepository.create(bodyData)
        const createdOrphan = await orphanRepository.save(newOrphan)

        return res.status(201).send(createdOrphan)
    } catch(err) {
        return res.status(400).send(err)
    }  
}

async function listOrphans(req: Request, res: Response) {
    const orphanRepository = getRepository(Orphan)

    try {
        const allOrphans = await orphanRepository.find()        

        return res.status(200).send(allOrphans)
    } catch(err) {
        return res.status(400).send(err)
    }
}

async function listOrphanById(req: Request, res: Response) {
    const orphanRepository = getRepository(Orphan)

    const { orphan_id } = req.params

    try {
        const orphan = await orphanRepository.findOneOrFail(orphan_id)

        return res.status(200).send(orphan)
    } catch(err) {
        return res.status(400).send(err)
    }
}
 
export {
    createOrphan,
    listOrphans,
    listOrphanById
}