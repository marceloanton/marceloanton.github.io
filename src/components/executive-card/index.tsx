import { SanitizedProfile } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

type Props = {
  loading: boolean;
  profile: SanitizedProfile;
};

const ExecutiveCard = ({ loading, profile }: Props) => {
  if (
    !loading &&
    !profile.highlights?.length &&
    !profile.languages?.length &&
    !profile.availability &&
    !profile.cta &&
    !profile.meetingUrl &&
    !profile.testimonials?.length
  ) {
    return null;
  }

  return (
    <div className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body p-6">
        <h3 className="card-title text-base-content">Perfil Ejecutivo</h3>

        {loading ? (
          <div className="space-y-2">
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
            {skeleton({ widthCls: 'w-11/12', heightCls: 'h-4' })}
            {skeleton({ widthCls: 'w-10/12', heightCls: 'h-4' })}
          </div>
        ) : (
          <>
            {!!profile.highlights?.length && (
              <div>
                <h4 className="font-semibold mb-2">Logros</h4>
                <ul className="space-y-2 text-sm text-base-content/90">
                  {profile.highlights.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {!!profile.languages?.length && (
                <div className="rounded-lg border border-base-300/40 p-3 bg-base-100/60">
                  <h4 className="font-semibold mb-2">Idiomas</h4>
                  <p className="text-sm text-base-content/90">
                    {profile.languages.join(' • ')}
                  </p>
                </div>
              )}
              {!!profile.availability && (
                <div className="rounded-lg border border-base-300/40 p-3 bg-base-100/60">
                  <h4 className="font-semibold mb-2">Disponibilidad</h4>
                  <p className="text-sm text-base-content/90">
                    {profile.availability}
                  </p>
                </div>
              )}
            </div>

            {!!profile.cta && (
              <div className="mt-4 rounded-lg border border-primary/30 bg-primary/10 p-4">
                <p className="font-semibold text-base-content">{profile.cta}</p>
              </div>
            )}

            {!!profile.meetingUrl && (
              <div className="mt-4">
                <a
                  href={profile.meetingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Agenda una reunion
                </a>
              </div>
            )}

            {!!profile.testimonials?.length && (
              <div className="mt-5">
                <h4 className="font-semibold mb-2">Testimonios</h4>
                <div className="grid grid-cols-1 gap-3">
                  {profile.testimonials.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-base-300/40 bg-base-100/60 p-3"
                    >
                      <p className="text-sm italic text-base-content/90">
                        "{item.quote}"
                      </p>
                      <p className="text-xs mt-2 text-base-content/70">
                        {item.author}
                        {item.role ? ` - ${item.role}` : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ExecutiveCard;
