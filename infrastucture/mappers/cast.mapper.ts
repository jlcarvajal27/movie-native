import { Cast } from "../interfaces/cast";
import { MovieCast } from "../interfaces/movieDb-cast.response";

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    };
  }
}
