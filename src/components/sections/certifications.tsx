const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Google Certified Professional Data Engineer",
  "TensorFlow Developer Certificate",
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-8">
      <div className="w-full max-w-[50%] mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-[1.7rem] font-bold tracking-tighter">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2 text-custom">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
