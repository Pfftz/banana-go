export default function Footer() {
    return (
        <footer className="bg-amber-800 border-t border-amber-200 py-8 text-center text-sm text-neutral-500">
            <p>
                &copy; {new Date().getFullYear()} Banana Go. All rights
                reserved.
            </p>
            <p className="mt-2">
                Fresh banana-based delights delivered with a smile.
            </p>
        </footer>
    );
}
