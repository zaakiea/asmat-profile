
export default function Gallery() {
    return (
        <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Documentation <span className="text-primary-light">Gallery</span></h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm">
                        <img alt="Activity with Dara and Fatur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXYaCDzFoAf12NfZYxWoqu8PdQrYz_aEX4zSXl7qjjTNlveO_Six3FnGKserFZrD3jQegRBrBGs-pv5MYRAvZeIWUGFOo5wQUt8cJpGRM9yzkodk3LLqkuBdE4V8r_k_19PQS0nbgBcL1itepZzTTnHbQnmsk1CjPTszx3e79aENy2vh6NKQxTaceI_zc_dWDyq2LtZaIsBbnrJ8Y9cpv4y7O4BWf4BlJgPiLiUnJSSL7Adw_4oKnm71Nra7HhO4Qyg_9dePw24KDl" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-xs font-medium">Dara & Fatur</p>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden h-56 group relative border border-gray-100 dark:border-gray-700 shadow-sm">
                        <img alt="Activity with Karolyn and Lusi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsXUUgfAzZB_zkLqp9v1hGOGBuEosfWJUMuAmguEgITM57tcjTBsyGtDj63_zT51ElhloJYdwkuJjdBhYwfeqpkNrjfzRQB8s6nvLLzzST77aqeoel4K-OBTshMHkEjkcdyNDEyiMN2uk7qaOLzU_xbm12YUlra6q7aQhv1W_Po4sMCoAk2oVVYtf-O0rCcej8IKvSGpfIMweq0_7vvH9fntFOktsH7WnUOhWiUfoqfeJmZ4JAVM-94N7j8GPy_9bDONbGJHZNzUrb" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-xs font-medium">Karolyn & Lusi</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 pt-8">
                    <div className="rounded-xl overflow-hidden h-56 group relative border border-gray-100 dark:border-gray-700 shadow-sm">
                        <img alt="Activity with Mecca and Nasywa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYRLN7C8Eq9vq3xW3dasJn2dIBQtap8QdIz1eHayYQCi31uRLO824-9EitWnfH70BSihoubuhN2Gor1lDmJgjwnpnRE1gcfs7JjcrYAD-dOWGWfK_4XN64y0pah-r1fFH4nIfEj1zLxzgaYUWDZC1vV7DX0lrYhVumhCTD6nnSIjQp2zULthBmc5Dya2ia2jMb7wvJDvsxbTNXOd0oPrcEVft-KDdhNCcmFh8Otqnj5_p4i6imsFluPKH48Jsf6WJOIHQeukFa_2nG" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-xs font-medium">Mecca & Nasywa</p>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden h-40 group relative border border-gray-100 dark:border-gray-700 shadow-sm">
                        <img alt="Activity with Nawa and Roziq" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCADpCxVS9ykyaeE9MmLkILhIYpCsTGXaLzyQG6QdeI7NpHmOtwd4VCtTgvDQMsV7MjDj5e9wBRHtfwHohX4hwm75FEdC1V92RNh1eGpZ6Lo9Np8tkSJ3QahnijfbHEN9Weru4y-kZ9GuYZgI1T7QfAV2xk1t0zFmvoUvyhPZeuD_GizS2CDxO5yJHLlFVXfq35sJbBTL24rJrUtayqmy0X-g2-R9lbuZBsmbN1GlMz9TZH8093ZpjfUsDIiDJPx4cqJPLmmSBrMiw6" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-white text-xs font-medium">Nawa & Roziq</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
