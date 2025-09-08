export default function Footer() {
    return (
        <footer className="mt-16 border-t py-8 text-center text-sm text-neutral-500">
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
