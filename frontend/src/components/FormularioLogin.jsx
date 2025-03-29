import React from 'react';
import { Link } from 'react-router-dom';	


const FormularioLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="bg-azul-paleta shadow-lg rounded-lg px-8 py-6 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-200">
                    Bem-vindo de volta!
                </h1>

                <form>
                    {/* Campo Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                            placeholder="lyoto.machida@email.com"
                            required
                        />

                    </div>

                    {/* Campo Senha */}
                    <div className="mb-4">
                        <label
                            htmlFor="senha"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Senha
                        </label>
                        <input
                            id="senha"
                            type="password"
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
                            placeholder="Digite sua senha"
                            required
                        />

                        <Link
                            to="/esqueci-senha"
                            className="block text-xs text-gray-200 hover:text-verde-paleta mt-1 duration-500"
                        >
                            Esqueceu a senha?
                        </Link>
                    </div>

                    {/* Opções adicionais */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                                Lembrar-me
                            </label>
                        </div>
                        <Link
                            to="/criar-conta"
                            className="text-xs text-verde-paleta hover:text-verde-escuro-paleta duration-500"
                        >
                            Criar Conta
                        </Link>
                    </div>

                    {/* Botão de Login */}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-verde-escuro-paleta hover:bg-verde-paleta duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioLogin;
