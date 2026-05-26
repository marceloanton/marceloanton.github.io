import { SanitizedProfile } from '../../interfaces/sanitized-config';

type Props = {
  loading: boolean;
  profile: SanitizedProfile;
};

const CaseStudyCard = ({ loading, profile }: Props) => {
  if (!loading && (!profile.caseStudies || profile.caseStudies.length === 0)) {
    return null;
  }

  return (
    <div className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body p-6">
        <h3 className="card-title text-base-content">Casos de Estudio</h3>
        <div className="grid grid-cols-1 gap-4 mt-2">
          {(profile.caseStudies || []).map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-base-300/40 bg-base-100/60 p-4"
            >
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-base-content/90">
                <span className="font-semibold">Problema:</span> {item.problem}
              </p>
              <p className="text-sm text-base-content/90 mt-1">
                <span className="font-semibold">Solucion:</span> {item.solution}
              </p>
              <p className="text-sm text-base-content/90 mt-1">
                <span className="font-semibold">Resultado:</span> {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
