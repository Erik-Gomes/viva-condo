"use client"

export default function ListaMoradores() {
    return(
        <div className="p-6 max-w-full">
            <div className="mb-4 flex items-center justify-between gap-4">
                <h1 className="text-x1 font-semibold">Moradores</h1>
            </div>

            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider ">#</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider ">Nome</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider ">Contato</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider ">Condominio</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider ">Unidade</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 tracking-wider ">Ação</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}