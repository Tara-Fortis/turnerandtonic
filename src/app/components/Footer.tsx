'use client';

export default function Footer() {
    return (
        <footer>
            <div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p>&copy; {new Date().getFullYear()} | Tineil Armstrong </p>
                </div>
            </div>
        </footer>
    )
}