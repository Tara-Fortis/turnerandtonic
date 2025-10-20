'use client';

export default function Footer() {
    return (
        <footer className="m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} | Tineil Armstrong </p>
                </div>
            </div>
        </footer>
    )
}