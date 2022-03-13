import { IZapato } from '../../../interfaces/IZapato';
import { IResolvers } from "@graphql-tools/utils"

const typeszapatoResolvers: IResolvers = {
    zapato :{
        marca: (zapato: IZapato) => {
            return zapato.marca;
        },

        modelo: (zapato: {modelo: IZapato}) => {
            return zapato.modelo;
        },

        publishedDate: (zapato: {publishedDate: IZapato}) => {
            return zapato.publishedDate;
        },

        thumbnailUrl: (zapato: {thumbnailUrl: IZapato}) => {
            return zapato.thumbnailUrl;
        },

        precio: (zapato: {precio: IZapato}) => {
            return zapato.precio;
        },

        longDescription: (zapato: {longDescription: IZapato}) => {
            return zapato.longDescription;
        },

        status: (zapato: {status: IZapato}) => {
            return zapato.status;
        },

        tallas: (zapato: {tallas: IZapato}) => {
            return zapato.tallas;
        },

        idm: (zapato: {idm: IZapato}) => {
            return zapato.idm;
        },

    }
}