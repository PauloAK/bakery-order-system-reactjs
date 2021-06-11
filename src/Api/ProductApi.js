import Client from './Client';

export const ProductApi = {
    list: async (page = 1) => {
        return await Client.get(`/api/v1/products?page=${page}`);
    },
    get: async (id) => {
        return await Client.get(`/api/v1/products/${id}`);
    },
    store: async (formData) => {
        return await Client.post('/api/v1/products', formData);
    },
    update: async (id, formData) => {
        return await Client.put(`/api/v1/products/${id}`, formData);
    },
    destroy: async (id) => {
        return await Client.destroy(`/api/v1/products/${id}`);
    },
};

export default ProductApi;